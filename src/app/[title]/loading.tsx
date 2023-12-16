/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Loading() {
    return (
        <div className="page-container">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="/loading.svg" alt="svg" height={100} width={100} />
            </div>
        </div>
    )
}
