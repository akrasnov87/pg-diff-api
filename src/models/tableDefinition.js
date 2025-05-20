class TableDefinition {
    /**
     *
     * @param {String} tableName
     * @param {String[]} tableKeyFields
     * @param {String} tableSchema
     * @param {String[]} ignoreFields
     */
    constructor(tableName, tableKeyFields, tableSchema, ignoreFields) {
        /** @type {String} */
        this.tableName = tableName;
        /** @type {String} */
        this.tableSchema = tableSchema;
        /** @type {String[]} */
        this.tableKeyFields = tableKeyFields;
        /** @type {String[]} */
        this.ignoreFields = ignoreFields;
    }
}

module.exports = TableDefinition;
