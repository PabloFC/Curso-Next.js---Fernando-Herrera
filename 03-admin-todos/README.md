# Development

Pasos para levantar la app localmente

1. Levantar la base de datos

```
docker-compose up -d
```

2. Renombrar el .env.template a .env
3. Remplazar las variables de entorno en el .env

# Prisma command

```
npx prisma init
npx prisma migrate dev
npx prisma generate

```
