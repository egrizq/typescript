## Guide to Start Prisma

### Setup
1. mkdir project-name
2. cd project-name
3. npm init -y
4. npm install prisma typescript ts-node @types/node --save-dev
5. npx tsc --init
6. npx prisma init 

### Migrate 
1. Create a model in schema.prisma
2. run -> npx prisma migrate dev --name init
