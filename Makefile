
install: 
	docker run -i -v `pwd`:/usr/src/app -w /usr/src/app node:4 npm install

run:
	docker-compse down
	docker-comopse up

create-user:
	docker run -i -v `pwd`:/usr/src/app -w /usr/src/app node:4 node create-user.js test
