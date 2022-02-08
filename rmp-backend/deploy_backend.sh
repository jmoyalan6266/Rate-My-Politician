echo "Deploying Backend..."
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 169750666925.dkr.ecr.us-east-2.amazonaws.com
docker build -t rmp-backend .
docker tag rmp-backend:latest 169750666925.dkr.ecr.us-east-2.amazonaws.com/rmp-backend:latest
docker push 169750666925.dkr.ecr.us-east-2.amazonaws.com/rmp-backend:latest
cd aws_deploy
eb deploy