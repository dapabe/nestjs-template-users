import { GenericDateEntity } from 'src/common/abs.entities';
import { RESTRICTIONS } from 'src/common/constants/RESTRICTIONS';
import { TABLE_NAMES } from 'src/common/constants/TABLE_NAMES';
import { LoginEntity } from 'src/modules/logins/entities/login.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.USERS)
export class UserEntity extends GenericDateEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: RESTRICTIONS.USER.MAX_NICK_LENGTH })
  userNick: string;

  @OneToOne(() => LoginEntity, (x) => x.RelUser)
  RelLogin: LoginEntity;
}
