from http.server import HTTPServer, SimpleHTTPRequestHandler
import ssl

httpd = HTTPServer(('127.0.0.1', 4443), SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket(httpd.socket, certfile='certificate.pem', keyfile='mykey.pem', server_side=True)

httpd.serve_forever()
