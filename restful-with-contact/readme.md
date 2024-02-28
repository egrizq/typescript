## Create RESTful API for Contact Management 

## Feature
1. User management
2. Contact management
3. Address management

### Requirement

##### Package
1. zod -> npm install zod
2. express -> npm install express, npm install --save-dev @types/express
3. prisma -> npm install --save-dev prisma
4. winston -> npm install winston
5. bcrypt -> npm install bcrypt, npm --save-dev @types/bcrypt

###### Test
1. jest (unitest) -> npm install --save-dev jest @types/jest
2. babel -> npm install --save-dev babel-jest @babel/preset-env
3. jest (typescript) -> npm install --save-dev @babel/preset-typescript, npm install @jest/globals
4. supertest -> npm install --save-dev supertest @types/supertest

##### Typescript
1. typescript -> npm install --save-dev typescript

##### Setup
1. npx tsc --init
2. open tsconfig.ts
3. change "module" to "commonjs"
4. change "moduleResulution" to "Node"
5. add include "src/***/* *" in top of "compilerOptions"
6. change "outDir" tp "./dist"
