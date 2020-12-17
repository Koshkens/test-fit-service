-- CreateTable
CREATE TABLE "City" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Station" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cityId" TEXT,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Station" ADD FOREIGN KEY("cityId")REFERENCES "City"("id") ON DELETE SET NULL ON UPDATE CASCADE;
