# Run backend and frontend
# Usage: ./scripts/run_dev.sh

cd src

# Run backend
cd backend
npm run dev &

# Run frontend
cd ../frontend
npm run start

cd ../../

# ! NOTE: Use Ctrl+C to stop the frontend
# ! NOTE: Close the terminal to stop the backend