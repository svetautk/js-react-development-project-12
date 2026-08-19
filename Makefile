build:
	rm -rf frontend/dist
	cd frontend	&&	npm install	&&	npm run build

start-backend:
	npx start-server -s ./frontend/dist

start:
	make start-backend