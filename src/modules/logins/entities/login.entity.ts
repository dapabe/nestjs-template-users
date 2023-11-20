import { GenericDateEntity } from 'src/common/abs.entities';
import { TABLE_NAMES } from 'src/common/constants/TABLE_NAMES';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity(TABLE_NAMES.LOGINS)
export class LoginEntity extends GenericDateEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'nvarchar',
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  userName: string;

  @Column({
    type: 'varchar',
  })
  password: string;

  @OneToOne(() => UserEntity, (x) => x.RelLogin)
  RelUser: UserEntity;
}
