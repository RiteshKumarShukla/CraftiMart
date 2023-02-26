import React from 'react';
import { useState, useEffect } from 'react';
import './Curosel.Module.css';

export const Curosel = () => {
    const [ind, setIndex] = useState(0);
    const imgobj = [{
        id: 1,
        url: 'https://cdn.plotch.io/image/upload/C/V/1671110178_SG9tZWRlY29yLnBuZw==.png',

    },
    {

        id: 2,
        url: 'https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png',


    },
    {
        id: 3,
        url: 'https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png',

    },
    {
        id: 4,
        url: 'https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png',

    },
    {
        id: 5,
        url: 'https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png',

    }
    ]
    useEffect(() => {

        setTimeout(() => {
            if (ind === imgobj.length - 1) {
                setIndex(0);
            }
            else {
                setIndex(ind + 1);
            }
        }, 3000);
    }, [ind])



    const hoverhandler = (num) => {
        setIndex(num);
    }


    return (
        <div className='curosel'>

            <div className='hoverimage'>
                <img src={imgobj[ind].url}
                    alt="" />
            </div>




            {/* hover control */}


            <div className='hovercontrol'>
                <h3 onMouseEnter={() => hoverhandler(0)}>
                    CraftiMart's Anniversary Sale
                </h3>

                <h3 onMouseEnter={() => hoverhandler(1)}>
                    Sarees
                </h3>

                <h3 onMouseEnter={() => hoverhandler(2)}>
                    Kurta
                </h3>


                <h3 onMouseEnter={() => hoverhandler(3)}>
                    Personal & Beauty Product
                </h3>

                <h3 onMouseEnter={() => hoverhandler(4)}>
                    Home Decor
                </h3>

            </div>

        </div>
    )
}
