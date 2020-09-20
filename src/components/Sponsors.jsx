import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactGA from 'react-ga';

import { MdKeyboardArrowRight } from 'react-icons/md';

import HomePageSections from 'constants/HomePageSections';
import { LargeLogoSponsors, SmallLogoSponsors } from 'constants/sponsors';

export default class Sponsors extends Component {

    static get propTypes() {
        return {
            className: PropTypes.string,
        }
    }

    static get defaultProps() {
        return {
            className: '',
        };
    }

    render() {
        const largeLogos = LargeLogoSponsors.map(logo => this._renderLogo(logo));
        const smallLogos = SmallLogoSponsors.map(logo => this._renderLogo(logo));

        const classnames = classNames('Section', 'Sponsors', this.props.className);

        return (
            <section className={classnames} id={HomePageSections.SPONSORS.name}>
                <div className="sponsors-container">
                    <div className="sponsors-header">
                        <h3>Past Sponsors</h3>
                        <div className="pill-divider" />
                    </div>
                    <div className="large-logos">
                        {largeLogos}
                    </div>
                    <div className="small-logos">
                        {smallLogos}
                    </div>
                    <div className="sponsor-contact">
                        <h5>Interested in sponsoring?</h5>
                        <div className="sponsor-cta">
                            <p><b><ReactGA.OutboundLink to="mailto:exploretechla@cs.ucla.edu" target="_blank" eventLabel="email_us_sponsors">
                                Email Us!
                            </ReactGA.OutboundLink></b></p>
                            <MdKeyboardArrowRight className="MdKeyboardArrowRight" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    _renderLogo(logo) {
        if (!logo || !logo.name || !logo.src) return null;
        const { name, src, website } = logo;
        return (
            <div className="logo-container" key={name}>
                <ReactGA.OutboundLink to={website} target="_blank" eventLabel={name}>
                    <img src={src} className="logo" alt={name} />
                </ReactGA.OutboundLink>
            </div>
        );
    }
}
