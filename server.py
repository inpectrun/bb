"""Liham at Larawan — local memories site.
Pure standard-library server: no pip installs needed.
Run with:  python server.py
Then open: http://localhost:8000
"""

import json
import mimetypes
import os
import re
import uuid
from base64 import b64decode
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(ROOT, "static")
UPLOADS_DIR = os.path.join(ROOT, "uploads")
DATA_DIR = os.path.join(ROOT, "data")
MEMORIES_FILE = os.path.join(DATA_DIR, "memories.json")
LETTER_FILE = os.path.join(DATA_DIR, "letter.json")
DATE_FILE = os.path.join(DATA_DIR, "date.json")

DEFAULT_LETTER = (
    "Kung minsan, sa dami ng oras na dumadaan, gusto ko lang tandaan kung gaano "
    "tayo ka-swerte na magkasabay sa mga araw na ito.\n\n"
    "Salamat sa bawat munting sandali na naging malaki dahil ikaw ang katabi."
)

os.makedirs(UPLOADS_DIR, exist_ok=True)
os.makedirs(DATA_DIR, exist_ok=True)


def load_json(path, default):
    if not os.path.exists(path):
        return default
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except (json.JSONDecodeError, OSError):
        return default


def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


class Handler(BaseHTTPRequestHandler):
    server_version = "LihamAtLarawan/1.0"

    def log_message(self, fmt, *args):
        pass  # keep the terminal quiet

    # ---------- helpers ----------
    def send_json(self, status, payload):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def send_file(self, path, content_type=None):
        if not os.path.isfile(path):
            self.send_json(404, {"error": "not found"})
            return
        if content_type is None:
            content_type = mimetypes.guess_type(path)[0] or "application/octet-stream"
        with open(path, "rb") as f:
            body = f.read()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def read_json_body(self):
        length = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(length) if length else b""
        if not raw:
            return {}
        return json.loads(raw.decode("utf-8"))

    # ---------- routing ----------
    def do_GET(self):
        path = self.path.split("?")[0]

        if path == "/" or path == "/index.html":
            self.send_file(os.path.join(ROOT, "index.html"), "text/html; charset=utf-8")
        elif path.startswith("/static/"):
            self.send_file(os.path.join(ROOT, path.lstrip("/")))
        elif path.startswith("/uploads/"):
            safe = os.path.basename(path)
            self.send_file(os.path.join(UPLOADS_DIR, safe))
        elif path == "/api/memories":
            memories = load_json(MEMORIES_FILE, [])
            self.send_json(200, memories)
        elif path == "/api/letter":
            letter = load_json(LETTER_FILE, {"text": DEFAULT_LETTER})
            self.send_json(200, letter)
        elif path == "/api/date":
            date = load_json(DATE_FILE, {"startDate": None})
            self.send_json(200, date)
        else:
            self.send_json(404, {"error": "not found"})

    def do_POST(self):
        path = self.path.split("?")[0]

        if path == "/api/memories":
            try:
                body = self.read_json_body()
                image_data_url = body.get("image", "")
                caption = (body.get("caption") or "").strip() or "walang caption"

                match = re.match(r"^data:image/(\w+);base64,(.+)$", image_data_url or "")
                if not match:
                    self.send_json(400, {"error": "invalid image"})
                    return
                ext = "jpg" if match.group(1) == "jpeg" else match.group(1)
                filename = f"{uuid.uuid4().hex}.{ext}"
                with open(os.path.join(UPLOADS_DIR, filename), "wb") as f:
                    f.write(b64decode(match.group(2)))

                memories = load_json(MEMORIES_FILE, [])
                entry = {
                    "id": uuid.uuid4().hex,
                    "filename": filename,
                    "caption": caption,
                    "createdAt": body.get("createdAt") or 0,
                }
                memories.append(entry)
                save_json(MEMORIES_FILE, memories)
                self.send_json(201, entry)
            except Exception as exc:  # noqa: BLE001
                self.send_json(500, {"error": str(exc)})

        elif path == "/api/letter":
            try:
                body = self.read_json_body()
                text = (body.get("text") or "").strip() or DEFAULT_LETTER
                save_json(LETTER_FILE, {"text": text})
                self.send_json(200, {"text": text})
            except Exception as exc:  # noqa: BLE001
                self.send_json(500, {"error": str(exc)})

        elif path == "/api/date":
            try:
                body = self.read_json_body()
                start_date = (body.get("startDate") or "").strip() or None
                save_json(DATE_FILE, {"startDate": start_date})
                self.send_json(200, {"startDate": start_date})
            except Exception as exc:  # noqa: BLE001
                self.send_json(500, {"error": str(exc)})
        else:
            self.send_json(404, {"error": "not found"})

    def do_DELETE(self):
        path = self.path.split("?")[0]
        m = re.match(r"^/api/memories/([a-f0-9]+)$", path)
        if m:
            memory_id = m.group(1)
            memories = load_json(MEMORIES_FILE, [])
            keep = [x for x in memories if x["id"] != memory_id]
            removed = [x for x in memories if x["id"] == memory_id]
            save_json(MEMORIES_FILE, keep)
            for r in removed:
                fp = os.path.join(UPLOADS_DIR, r["filename"])
                if os.path.exists(fp):
                    os.remove(fp)
            self.send_json(200, {"ok": True})
        else:
            self.send_json(404, {"error": "not found"})


if __name__ == "__main__":
    port = 8000
    httpd = ThreadingHTTPServer(("127.0.0.1", port), Handler)
    print(f"Liham at Larawan running at http://localhost:{port}")
    print("Ctrl+C para itigil ang server.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
