import React from 'react'

export default function SavedResultItem({time, value}) {
    return (
        <tr>
            <td>{new Date(time).toLocaleDateString('en')}</td>
            <td>{value}({Number.parseInt(value, 2)})</td>
        </tr>
    )
}
