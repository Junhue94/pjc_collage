/**
 * Queue Mock Result
 * For Mock API Calls and Unit Tests
 */
const QueueMockResult = {
    getQueueList() {
        return {
            total_rows: 3,
            rows: [
                {
                    _id: '1',
                    type: 'contacts',
                    name: 'ENT Specialist Center',
                    contact: 'Mr Lai',
                    category: 'Doctor',
                    handphone: '94322320',
                    telephone: '68349030',
                    fax: '68684940',
                    email: 'ent@lent.com',
                    address: '#10-90 Mount Novena Specialist Center',
                    notes: '',
                },
                {
                    _id: '2',
                    type: 'contacts',
                    name: 'Dr Tan Clinic',
                    contact: 'Mr Tan',
                    category: 'Nurse',
                    handphone: '92343034',
                    telephone: '66678839',
                    fax: '69340304',
                    email: 'tan@tanclinic.com',
                    address: '#13-40 Mountain Center',
                    notes: '',
                },
                {
                    _id: '3',
                    type: 'contacts',
                    name: 'Gyne Assoc Center',
                    contact: 'Dr Tan Lee',
                    category: 'Doctor',
                    handphone: '94322334',
                    telephone: '68345030',
                    fax: '68683433',
                    email: 'long@test.com',
                    address: '#90-32 Mount Elizabeth Hospital',
                    notes: '',
                },
            ],
        };
    },
};

export default QueueMockResult;
