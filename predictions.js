const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const predictions = ['it will rain', 'you will have car trouble', 'you will meet an amazing person', 'you will get home late'];
const actions1 = ['carry a raincoat in your car.', 'make sure you wipers are functional', 'not leave your clothes on the line', ];
const actions2 = ['charge your flashlight', 'be in good terms with the local mechanic', 'leave early for work', "pray it doesn't rain"];
const actions3 = ['charge your flashlight', 'brush up on your etiquette', 'carry your contact cards', 'leave your sarcasm at home'];
const actions4 = ['not leave your clothes on the line', 'leave keys with the neighbour', 'carry warm clothing'];

const prediction = () => {
    let action = 'not worry about a thing';
    let day = daysOfWeek[Math.floor(Math.random * 7) ];
    let prediction = predictions [Math.floor(Math.random * predictions.length)];
    switch (prediction) {
        case  'it will rain':
            action = actions1[Math.floor(Math.random * actions1.length)];
            break;
        case  'you will have car trouble':
            action = actions2[Math.floor(Math.random * actions2.length)];
            break;
        case  'you will meet an amazing person':
            action = actions3[Math.floor(Math.random * actions3.length)];
            break;
        case  'you will get home late':
            action = actions4[Math.floor(Math.random * actions4.length)];
            break;
        default : action = 'not worry about a thing'
        
    };
    console.log(`On ${day}, ${prediction}. You better ${action}`);
}

prediction();

