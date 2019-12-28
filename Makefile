setup:
	docker build -t list-data .
start:
	docker run -it -p 8080:8080 --rm --name list-data-1 list-data
