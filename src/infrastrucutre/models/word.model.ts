import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "Word",
})
class WordModel extends Model {
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
    Text!: String;

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

export default WordModel;