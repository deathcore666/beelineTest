docker-compose down
docker-compose up -d --force-recreate
sleep 10
docker exec mongo bash -c "mongo new-dashboard /DB/mongosetup.js"