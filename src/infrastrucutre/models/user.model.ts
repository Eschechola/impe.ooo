import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "User",
})
class UserModel extends Model {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    Id!: Number;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Username!: String;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Email!: String;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    Password!: String;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    CreatedAt!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    UpdatedAt!: Date;
}

export default UserModel;