# create-secure-server-api
NodeJS https secure server 

# Create SSL Commands

```bash
$ cd create-secure-server-api
$ mkdir ssl
$ cd ssl
```

```bash
openssl genrsa -out key.pem
```

```bash
openssl req -new -key key.pem -out csr.pem
```

```Info SSL Data
Country Name (2 letter code) []:GR
State or Province Name (full name) []:Attica
Locality Name (eg, city) []:Athens
Organization Name (eg, company) []:Test Company
Organizational Unit Name (eg, section) []:Software Development
Common Name (eg, fully qualified host name) []:Test Company Name
Email Address []:test@email.com
```

```bash
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
```

# Create Environment File

```bash
$ cd create-secure-server-api
$ touch .env
$ vim .env
PORT=4000
```

# Browser website
https://localhost:4000
