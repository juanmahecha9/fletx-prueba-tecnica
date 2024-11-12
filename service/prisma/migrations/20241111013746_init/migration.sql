-- CreateTable
CREATE TABLE `service_tbl` (
    `id` VARCHAR(191) NOT NULL,
    `client` VARCHAR(191) NOT NULL,
    `business` VARCHAR(191) NOT NULL,
    `vehicle` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `indications` VARCHAR(191) NOT NULL,
    `indications_service` VARCHAR(191) NOT NULL,
    `indications_driver` VARCHAR(191) NOT NULL,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
