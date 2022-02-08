docker-backend:
	cd rmp-backend; docker run -p 8080:8080 kenthansen98/rmp-backend

docker-frontend:
	cd rmp-frontend; docker build -t rmp-frontend .; docker run -it -p 3000:3000 rmp-frontend

deploy_frontend:
	echo "Deploying Frontend..."
	cd rmp-frontend; export REACT_APP_API_URL=/api; npm run build; aws s3 sync build/ s3://rmp-frontend

deploy_backend:
	echo "Deploying Backend..."
	cd rmp-backend; aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 169750666925.dkr.ecr.us-east-2.amazonaws.com; docker build -t rmp-backend .; docker tag rmp-backend:latest 169750666925.dkr.ecr.us-east-2.amazonaws.com/rmp-backend:latest; docker push 169750666925.dkr.ecr.us-east-2.amazonaws.com/rmp-backend:latest; cd aws_deploy; eb deploy