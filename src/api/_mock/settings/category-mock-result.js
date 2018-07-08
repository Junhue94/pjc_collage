/**
 * Category Settings Mock Result
 * For Mock API Calls and Unit Tests
 */
const CategorySettingsMockResult = {
    createCategory() {
        return [
            {
                _id: '1',
                name: 'Notes',
                active: true,
                created_on: 1511848298000,
                last_edited_on: 1511848298000,
                order: 1,
                change_log: [
                    {
                        user: 'admin',
                        timestamp: 1511848298000,
                    },
                ],
            },
        ];
    },
    getCategory() {
        return {
            _id: '2',
            name: 'Labs',
            active: true,
            created_on: 1511848298000,
            last_edited_on: 1511848298000,
            order: 2,
            change_log: [
                {
                    user: 'nurse',
                    timestamp: 1511848298000,
                },
            ],
        };
    },
    patchCategory() {
        return {
            _id: '1',
            name: 'Notes',
            active: true,
            created_on: 1511848298000,
            last_edited_on: 1511848298000,
            order: 1,
            change_log: [
                {
                    user: 'admin',
                    timestamp: 1511848298000,
                },
            ],
        };
    },
    findCategorySettingsList() {
        return [
            {
                _id: '1',
                name: 'Notes',
                active: true,
                created_on: 1511848298000,
                last_edited_on: 1511848298000,
                order: 1,
                change_log: [
                    {
                        user: 'admin',
                        timestamp: 1511848298000,
                    },
                ],
            },
            {
                _id: '2',
                name: 'Labs',
                active: true,
                created_on: 1511848298000,
                last_edited_on: 1511848298000,
                order: 2,
                change_log: [
                    {
                        user: 'nurse',
                        timestamp: 1511848298000,
                    },
                ],
            },
            {
                _id: '3',
                name: 'Prescription',
                active: true,
                created_on: 1511848298000,
                last_edited_on: 1511848298000,
                order: 3,
                change_log: [
                    {
                        user: 'admin',
                        timestamp: 1511848298000,
                    },
                ],
            },
            {
                _id: '4',
                name: 'Misc',
                active: true,
                created_on: 1511848298000,
                last_edited_on: 1511848298000,
                order: 4,
                change_log: [
                    {
                        user: 'doctor',
                        timestamp: 1511848298000,
                    },
                ],
            },
        ];
    },
};

export default CategorySettingsMockResult;
