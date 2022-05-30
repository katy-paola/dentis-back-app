-- CreateEnum
CREATE TYPE "Status" AS ENUM ('AGENDADA', 'REPROGRAMADA', 'CANCELADA');

-- CreateTable
CREATE TABLE "Cita" (
    "id" SERIAL NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "fechaHora" TIMESTAMP(3) NOT NULL,
    "estado" "Status" NOT NULL,
    "motivo" TEXT NOT NULL,

    CONSTRAINT "Cita_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cita" ADD CONSTRAINT "Cita_idPaciente_fkey" FOREIGN KEY ("idPaciente") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
