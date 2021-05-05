import React from 'react'

export default function SubscribeFrom() {
    return (
        <section className="newsletter section">
            <div className="newsletter__container bd-grid">
                <div className="newsletter__formt-title">
                    <h3 className="newsletter__title">
                        Subscribe And Get <br /> 10% OFF
                    </h3>
                    <p className="newsletter__description">
                        Get 10% discount for all products
                    </p>
                </div>
                <form action="" className="newsletter__form-subcribe">
                    <input
                        type="text"
                        placeholder="@email.com"
                        className="newsletter__input"
                    />
                    <a href="/#" className="btn-explore">
                        Subcribe
                    </a>
                </form>
            </div>
        </section>
    )
}
