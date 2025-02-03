import React, { createContext } from "react"

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
    const convertDate = (date) => {
        const dateObject = new Date(date);

        const day = dateObject.getDate().toString().padStart(2, '0');
        const month = dateObject.toLocaleString('default', { month: 'long' });
        const year = dateObject.getFullYear();

        const formattedString = `${day} ${month} ${year}`;

        return formattedString
    }

    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) {
            return description;
        }
        return description.slice(0, maxLength) + '...';
    };

    const currencySalary = (number) => {
        if (number == 0) {
            return "Salary is not disclosed"
        }

        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(number)
    }

    return (
        <GlobalContext.Provider value={
            {
                convertDate,
                truncateDescription,
                currencySalary
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}