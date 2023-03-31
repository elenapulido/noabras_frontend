import React, { useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from './Styles';

const ButtonTop = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div>

            <Button>
                <FaArrowCircleUp onClick={scrollTop} style={{ display: visible ? 'inline' : 'none' }} />
            </Button>

        </div>
    );
}

export default ButtonTop