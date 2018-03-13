import _ from 'lodash'; 

const initialState = [
      {
        name: 'Ace clubs',
        pos:'0px 0px',
        bkPos: '0px -2337px',
        id: 1,
        uid: 1
      },
      {
        name: 'Ace two',
        pos: '-79px 0px',
        bkPos: '0px -2337px',
        id: 2,
        uid: 2
      },
      {
        name: 'Ace three',
        pos: '-158px 0px',
        bkPos: '0px -2337px',
        id: 3,
        uid: 3
      },
      {
        name: 'Ace four',
        pos: '-237px 0px',
        bkPos: '0px -2337px',
        id: 4,
        uid: 4
      },
      {
        name: 'Ace six',
        pos: '-316px 0px',
        bkPos: '0px -2337px',
        id: 5,
        uid: 5
      },
      {
        name: 'Ace two',
        pos: '-395px 0px',
        bkPos: '0px -2337px',
        id: 6,
        uid: 6
      },
      {
        name: 'Ace two',
        pos: '-474px 0px',
        bkPos: '0px -2337px',
        id: 7,
        uid: 7
      },
      {
        name: 'Ace two',
        pos: '-553px 0px',
        bkPos: '0px -2337px',
        id: 8,
        uid: 8
      },
      {
        name: 'Ace two',
        pos: '-632px 0px',
        bkPos: '0px -2337px',
        id: 9,
        uid: 9
      },
      {
        name: 'Ace two',
        pos: '-711px 0px',
        bkPos: '0px -2337px',
        id: 10,
        uid: 10
      },
      {
        name: 'Ace two',
        pos: '-790px 0px',
        bkPos: '0px -2337px',
        id: 11,
        uid: 11,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-869px 0px',
        bkPos: '0px -2337px',
        id: 12,
        uid: 12,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-948px 0px',
        bkPos: '0px -2337px',
        id: 13,
        uid: 13,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '0px -123px;',
        bkPos: '0px -2337px',
        id: 14,
        uid: 14,
      },
      {
        name: 'Ace two',
        pos: '-79px -123px;',
        bkPos: '0px -2337px',
        id: 15,
        uid: 15
      },
      {
        name: 'Ace two',
        pos: '-158px -123px',
        bkPos: '0px -2337px',
        id: 16,
        uid: 16,
      },
      {
        name: 'Ace two',
        pos: '-237px -123px',
        bkPos: '0px -2337px',
        id: 17,
        uid: 17,
      },
      {
        name: 'Ace two',
        pos: '-316px -123px',
        bkPos: '0px -2337px',
        id: 18,
        uid: 18,
      },
      {
        name: 'Ace two',
        pos: '-395px -123px',
        bkPos: '0px -2337px',
        id: 19,
        uid: 19,
      },
      {
        name: 'Ace two',
        pos: '-474px -123px',
        bkPos: '0px -2337px',
        id: 20,
        uid: 20,
      },
      {
        name: 'Ace two',
        pos: '-553px -123px',
        bkPos: '0px -2337px',
        id: 21,
        uid: 21,
      },
      {
        name: 'Ace two',
        pos: '-632px -123px',
        bkPos: '0px -2337px',
        id: 22,
        uid: 22
      },
      {
        name: 'Ace two',
        pos: '-711px -123px',
        bkPos: '0px -2337px',
        id: 23,
        uid: 23
      },
      {
        name: 'Ace two',
        pos: '-790px -123px',
        bkPos: '0px -2337px',
        id: 24,
        uid: 24,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-869px -123px',
        bkPos: '0px -2337px',
        id: 25,
        uid: 25,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-948px -123px',
        bkPos: '0px -2337px',
        id: 26,
        uid: 26,
        type: 'royal'
      },
      {
        name: 'Ace clubs',
        pos:'0 -246px',
        bkPos: '0px -2337px',
        id: 27,
        uid: 27
      },
      {
        name: 'Ace two',
        pos: '-79px -246px',
        bkPos: '0px -2337px',
        id: 28,
        uid: 28
      },
      {
        name: 'Ace three',
        pos: '-158px -246px',
        bkPos: '0px -2337px',
        id: 29,
        uid: 29
      },
      {
        name: 'Ace four',
        pos: '-237px -246px',
        bkPos: '0px -2337px',
        id: 30,
        uid: 30
      },
      {
        name: 'Ace six',
        pos: '-316px -246px',
        bkPos: '0px -2337px',
        id: 31,
        uid: 31
      },
      {
        name: 'Ace two',
        pos: '-395px -246px',
        bkPos: '0px -2337px',
        id: 32,
        uid: 32
      },
      {
        name: 'Ace two',
        pos: '-474px -246px',
        bkPos: '0px -2337px',
        id: 33,
        uid: 33
      },
      {
        name: 'Ace two',
        pos: '-553px -246px',
        bkPos: '0px -2337px',
        id: 34,
        uid: 34
      },
      {
        name: 'Ace two',
        pos: '-632px -246px',
        bkPos: '0px -2337px',
        id: 35,
        uid: 35
      },
      {
        name: 'Ace two',
        pos: '-711px -246px',
        bkPos: '0px -2337px',
        id: 36,
        uid: 36
      },
      {
        name: 'Ace two',
        pos: '-790px -246px',
        bkPos: '0px -2337px',
        id: 37,
        uid: 37,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-869px -246px',
        bkPos: '0px -2337px',
        id: 38,
        uid: 38,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-948px -246px',
        bkPos: '0px -2337px',
        id: 39,
        uid: 39,
        type: 'royal'
      },
      {
        name: 'Ace clubs',
        pos:'0px -369px',
        bkPos: '0px -2337px',
        id: 40,
        uid: 40
      },
      {
        name: 'Ace two',
        pos: '-79px -369px',
        bkPos: '0px -2337px',
        id: 41,
        uid: 41
      },
      {
        name: 'Ace three',
        pos: '-158px -369px',
        bkPos: '0px -2337px',
        id: 42,
        uid: 42
      },
      {
        name: 'Ace four',
        pos: '-237px -369px',
        bkPos: '0px -2337px',
        id: 43,
        uid: 43
      },
      {
        name: 'Ace six',
        pos: '-316px -369px',
        bkPos: '0px -2337px',
        id: 44,
        uid: 44
      },
      {
        name: 'Ace two',
        pos: '-395px -369px',
        bkPos: '0px -2337px',
        id: 45,
        uid: 45
      },
      {
        name: 'Ace two',
        pos: '-474px -369px',
        bkPos: '0px -2337px',
        id: 46,
        uid: 46
      },
      {
        name: 'Ace two',
        pos: '-553px -369px',
        bkPos: '0px -2337px',
        id: 47,
        uid: 47
      },
      {
        name: 'Ace two',
        pos: '-632px -369px',
        bkPos: '0px -2337px',
        id: 48,
        uid: 48
      },
      {
        name: 'Ace two',
        pos: '-711px -369px',
        bkPos: '0px -2337px',
        id: 49,
        uid: 49
      },
      {
        name: 'Ace two',
        pos: '-790px -369px',
        bkPos: '0px -2337px',
        id: 50,
        uid: 50,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-869px -369px',
        bkPos: '0px -2337px',
        id: 51,
        uid: 51,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-948px -369px',
        bkPos: '0px -2337px',
        id: 52,
        uid: 52,
        type: 'royal'
      },
      {
        name: 'Ace clubs',
        pos:'0px 0px',
        bkPos: '0px -2337px',
        id: 1,
        uid: 53
      },
      {
        name: 'Ace two',
        pos: '-79px 0px',
        bkPos: '0px -2337px',
        id: 2,
        uid: 54
      },
      {
        name: 'Ace three',
        pos: '-158px 0px',
        bkPos: '0px -2337px',
        id: 3,
        uid: 55
      },
      {
        name: 'Ace four',
        pos: '-237px 0px',
        bkPos: '0px -2337px',
        id: 4,
        uid: 56
      },
      {
        name: 'Ace six',
        pos: '-316px 0px',
        bkPos: '0px -2337px',
        id: 5,
        uid: 57
      },
      {
        name: 'Ace two',
        pos: '-395px 0px',
        bkPos: '0px -2337px',
        id: 6,
        uid: 58
      },
      {
        name: 'Ace two',
        pos: '-474px 0px',
        bkPos: '0px -2337px',
        id: 7,
        uid: 59
      },
      {
        name: 'Ace two',
        pos: '-553px 0px',
        bkPos: '0px -2337px',
        id: 8,
        uid: 60
      },
      {
        name: 'Ace two',
        pos: '-632px 0px',
        bkPos: '0px -2337px',
        id: 9,
        uid: 61
      },
      {
        name: 'Ace two',
        pos: '-711px 0px',
        bkPos: '0px -2337px',
        id: 10,
        uid: 62
      },
      {
        name: 'Ace two',
        pos: '-790px 0px',
        bkPos: '0px -2337px',
        id: 11,
        uid: 63,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-869px 0px',
        bkPos: '0px -2337px',
        id: 12,
        uid: 64,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-948px 0px',
        bkPos: '0px -2337px',
        id: 13,
        uid: 65,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '0px -123px;',
        bkPos: '0px -2337px',
        id: 14,
        uid: 66,
      },
      {
        name: 'Ace two',
        pos: '-79px -123px;',
        bkPos: '0px -2337px',
        id: 15,
        uid: 67
      },
      {
        name: 'Ace two',
        pos: '-158px -123px',
        bkPos: '0px -2337px',
        id: 16,
        uid: 68
      },
      {
        name: 'Ace two',
        pos: '-237px -123px',
        bkPos: '0px -2337px',
        id: 17,
        uid: 69
      },
      {
        name: 'Ace two',
        pos: '-316px -123px',
        bkPos: '0px -2337px',
        id: 18,
        uid: 70
      },
      {
        name: 'Ace two',
        pos: '-395px -123px',
        bkPos: '0px -2337px',
        id: 19,
        uid: 71
      },
      {
        name: 'Ace two',
        pos: '-474px -123px',
        bkPos: '0px -2337px',
        id: 20,
        uid: 72
      },
      {
        name: 'Ace two',
        pos: '-553px -123px',
        bkPos: '0px -2337px',
        id: 21,
        uid: 73
      },
      {
        name: 'Ace two',
        pos: '-632px -123px',
        bkPos: '0px -2337px',
        id: 22,
        uid: 74
      },
      {
        name: 'Ace two',
        pos: '-711px -123px',
        bkPos: '0px -2337px',
        id: 23,
        uid: 75
      },
      {
        name: 'Ace two',
        pos: '-790px -123px',
        bkPos: '0px -2337px',
        id: 24,
        uid: 76,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-869px -123px',
        bkPos: '0px -2337px',
        id: 25,
        uid: 77,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-948px -123px',
        bkPos: '0px -2337px',
        id: 26,
        uid: 78,
        type: 'royal'
      },
      {
        name: 'Ace clubs',
        pos:'0 -246px',
        bkPos: '0px -2337px',
        id: 27,
        uid: 79
      },
      {
        name: 'Ace two',
        pos: '-79px -246px',
        bkPos: '0px -2337px',
        id: 28,
        uid: 80
      },
      {
        name: 'Ace three',
        pos: '-158px -246px',
        bkPos: '0px -2337px',
        id: 29,
        uid: 81
      },
      {
        name: 'Ace four',
        pos: '-237px -246px',
        bkPos: '0px -2337px',
        id: 30,
        uid: 82
      },
      {
        name: 'Ace six',
        pos: '-316px -246px',
        bkPos: '0px -2337px',
        id: 31,
        uid: 83
      },
      {
        name: 'Ace two',
        pos: '-395px -246px',
        bkPos: '0px -2337px',
        id: 32,
        uid: 84
      },
      {
        name: 'Ace two',
        pos: '-474px -246px',
        bkPos: '0px -2337px',
        id: 33,
        uid: 85
      },
      {
        name: 'Ace two',
        pos: '-553px -246px',
        bkPos: '0px -2337px',
        id: 34,
        uid: 86
      },
      {
        name: 'Ace two',
        pos: '-632px -246px',
        bkPos: '0px -2337px',
        id: 35,
        uid: 87
      },
      {
        name: 'Ace two',
        pos: '-711px -246px',
        bkPos: '0px -2337px',
        id: 36,
        uid: 88
      },
      {
        name: 'Ace two',
        pos: '-790px -246px',
        bkPos: '0px -2337px',
        id: 37,
        uid: 89,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-869px -246px',
        bkPos: '0px -2337px',
        id: 38,
        uid: 90,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-948px -246px',
        bkPos: '0px -2337px',
        id: 39,
        uid: 91,
        type: 'royal'
      },
      {
        name: 'Ace clubs',
        pos:'0px -369px',
        bkPos: '0px -2337px',
        id: 40,
        uid: 92
      },
      {
        name: 'Ace two',
        pos: '-79px -369px',
        bkPos: '0px -2337px',
        id: 41,
        uid: 93
      },
      {
        name: 'Ace three',
        pos: '-158px -369px',
        bkPos: '0px -2337px',
        id: 42,
        uid: 94
      },
      {
        name: 'Ace four',
        pos: '-237px -369px',
        bkPos: '0px -2337px',
        id: 43,
        uid: 95
      },
      {
        name: 'Ace six',
        pos: '-316px -369px',
        bkPos: '0px -2337px',
        id: 44,
        uid: 96
      },
      {
        name: 'Ace two',
        pos: '-395px -369px',
        bkPos: '0px -2337px',
        id: 45,
        uid: 97
      },
      {
        name: 'Ace two',
        pos: '-474px -369px',
        bkPos: '0px -2337px',
        id: 46,
        uid: 98
      },
      {
        name: 'Ace two',
        pos: '-553px -369px',
        bkPos: '0px -2337px',
        id: 47,
        uid: 99
      },
      {
        name: 'Ace two',
        pos: '-632px -369px',
        bkPos: '0px -2337px',
        id: 48,
        uid: 100
      },
      {
        name: 'Ace two',
        pos: '-711px -369px',
        bkPos: '0px -2337px',
        id: 49,
        uid: 101
      },
      {
        name: 'Ace two',
        pos: '-790px -369px',
        bkPos: '0px -2337px',
        id: 50,
        uid: 102,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-869px -369px',
        bkPos: '0px -2337px',
        id: 51,
        uid: 103,
        type: 'royal'
      },
      {
        name: 'Ace two',
        pos: '-948px -369px',
        bkPos: '0px -2337px',
        id: 52,
        uid: 104,
        type: 'royal'

      },
    ];

const clickCounts = 0;
const isEqual = null;
var checkPair = [];


const cards = (state = initialState, action) => {
  
  switch (action.type) {

    case 'ON_CARD_SELECT':

    checkPair.push(action);

    if(checkPair.length == 2) {
      if(_.isEqual(checkPair[0].card.id, checkPair[1].card.id)) {

        state = state.filter(card => card.id !== checkPair[1].card.id);
        
      }

      checkPair = [];
    }

    return state

    case 'ON_CARD_CHANGE':

    const peopleArray = Object.keys(action.cardData).map(i => action.cardData[i])

    state = peopleArray;
    
    default:

      return state

  }
}

export default cards
