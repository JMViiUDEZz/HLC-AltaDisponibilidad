echo "Tareas (por etapas) del pipeline JenkinsFile..."

echo "Instalando APP EntradasATuAlcance..."
echo "Descargar repositorio de APP EntradasATuAlcance..."
echo "Actualizar versiones de los dockerfiles en Docker Hub..."
echo "Realizar el build del proyecto..."
echo "Fases de testeo..."
echo "Matar los contenedores en ejecución de la versión anterior..."
echo "Levantar los nuevos contenedores actualizados..."

echo "Desplegando la app de pEntradasATuAlcance..."

echo "docker compose -f docker-compose.yml build"
echo "docker compose -f docker-compose.yml up -d"