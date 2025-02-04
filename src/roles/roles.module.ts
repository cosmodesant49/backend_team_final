// src/roles/role.module.ts
import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [RoleService, PrismaService],
})
export class RoleModule {}
