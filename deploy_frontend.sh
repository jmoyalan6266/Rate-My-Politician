echo "Deploying Frontend..."
cd rmp-frontend
export REACT_APP_API_URL=/api
npm run build
aws s3 sync build/ s3://rmp-frontend