import { Injectable } from '@nestjs/common';
import { BaseEntityService } from 'src/shared/core/class/base.service';

import { ClientEntity } from '../entities/client.entity';
import { ClientRepository } from '../repositories/client.repository';


@Injectable()
export class ClientEntityService extends BaseEntityService<ClientEntity> {
  constructor(private readonly _clientRepo: ClientRepository) {
    super(_clientRepo, ClientEntity.name);
  }




}
