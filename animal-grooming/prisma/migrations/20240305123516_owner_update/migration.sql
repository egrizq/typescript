-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `owner` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(100) NOT NULL,
    `address` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `user_owner_key`(`owner`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `animal` (
    `animal_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `age` VARCHAR(10) NOT NULL,
    `color` VARCHAR(10) NOT NULL,
    `kind` VARCHAR(100) NOT NULL,
    `owner` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`animal_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admin` (
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `token` VARCHAR(100) NULL,

    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `animal` ADD CONSTRAINT `animal_owner_fkey` FOREIGN KEY (`owner`) REFERENCES `user`(`owner`) ON DELETE RESTRICT ON UPDATE CASCADE;
