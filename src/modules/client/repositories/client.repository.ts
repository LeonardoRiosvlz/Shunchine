import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/shared/modules/data-access/mongoose/base.respository';

import { FilterableFieldsType } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { ClientEntity } from '../entities/client.entity';

@Injectable()
export class ClientRepository extends BaseRepository<ClientEntity, FilterableFieldsType<ClientEntity>> {
  constructor(
    @Inject(ClientEntity.name) private readonly _clientModel: Model<ClientEntity>,
  ) {
    super(_clientModel, ClientRepository.name);
  }
}
