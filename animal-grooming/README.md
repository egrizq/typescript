# CRUD Grooming Animal

CRUD application implemented in Typescript, utilizing express.js framework for routing and Prisma ORM for database operations. 

The project required admin to handle all the services, so you must create an account first, after creating the account you can access all the service/api endpoint.

To handle user who want to grooming his animal, you must creating an account for him and the animal from owner name, phone, address, name of the animal, age, color, kind (read: cat or dog).

After register as an admin you must register the user and giving him a queue who will show after you register him.

If the grooming is done then you can delete the data from grooming table, the you can procces to the next user animal

If you logout, you cannot access all the services.

## Folder Structure

1. docs -> Documentation of endpoint for this project
2. prisma -> Contains starting point for database relation 
3. src -> Source code of this project

## Prerequisites

- Typescript
- MySQL database
- Prisma

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/egrizq/typescript.git
    ```

2. Install dependencies:

    ```bash
    npm install // to install all the dependecies
    ```

3. Configure the database:

    - Create a MySQL database named `animal`
    
    ```bash
    npx prisma migrate dev --name database
    ```

4. Run the application:

    ```bash
    npm run build
    npm run start
    ```

5. Open your POSTMAN and [http://localhost:8080](http://localhost:8080) to access the endpoint.