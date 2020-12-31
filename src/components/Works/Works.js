import WorkList from "../WorkList/WorkList";
import "./Works.css";
import cosmicvariance from "../../images/cosmicvariance.png";
import lss from "../../images/lss.jpg";
import cdfs from "../../images/cdfs.jpg";
import agn from "../../images/2016.jpg";
import midIR from "../../images/2015_2.jpg";
import quasars from "../../images/2015.jpg";
import blackHole from "../../images/2013.jpg";
const works = [
    {
        image: cosmicvariance,
        title: "XSERVS -- W-CDF-S and ELAIS-S1",
        text: <p className="worklist__subtitle">Our team has recently been awarded 3.4 Ms XMM-Newton time to complete the X-SERVS survey by adding the W-CDF-S and ELAIS-S1 fields, as one of the only two XMM-Newton Multi-year Heritage Programs ever selected (PIs: W. Brandt, C. Chen, B. Luo). Combined with the XMM-LSS and COSMOS fields, we will be able to study how supermassive black holes galaxies coevolve in the full-range of cosmic environments. Image courtesy of Bin Luo.</p>
    },
    {
        image: lss,
        title: "XSERVS:XMM-LSS survey",
        text: <p className="worklist__subtitle">I am current leading the data analysis of the SERVS-XMM-LSS survey, which is a large XMM-Newton project
        with 1.3 megasecond of XMM-Newton time to observe the XMM-LSS survey region
        (PI: <a target="_blank" rel="noreferrer" className="link" href="http://www2.astro.psu.edu/users/niel/">Brandt</a> and
        <a target="_blank" rel="noreferrer" className="link" href="http://114.212.184.10:8080/a/Faculties/Professor/2016/0409/85.html">Luo</a>).
        Our SERVS-XMM-LSS survey is unique because we will achieve both the necessary depth and area to detect the bulk of faint and obscured AGNs
        out to redshift ~ 2 (when the Universe was only 3.3 billion years old). We expect to detect >2,000 new accreting supermassive black holes in this survey. Please tune in for updates on the exciting science that we could do with the new dataset!
        (MNRAS in press. The article is available <a className="link" target="_blank" rel="noreferrer" href="https://arxiv.org/abs/1804.07763">here</a>, and the data products are available <a target="_blank" rel="noreferrer" className="link" href="http://personal.psu.edu/wnb3/xmmservs/xmmservs.html">here</a>.)
        </p>
    },
    {
        image: cdfs,
        title: "Black holes grow faster in massive galaxies",
        text: <p className="worklist__subtitle">I've been working with a graduate student at PSU, <a target="_blank" rel="noreferrer" className="link" href="http://www.personal.psu.edu/gxy909/">Guang Yang</a>
        ,to investigate how the average black hole accretion rate for galaxies in the CANDELS GOODS-SOUTH field correlates
        with both the stellar mass and star formation rates.
        Spoiler alert -- With the unprecedented 7 mega second Chandra observations in the Chandra Deep Field South,
        we find evidence suggesting that black holes in low-mass galaxies are not growing as efficiently as they are in the massive galaxies
        (Published in ApJ, see the article <a target="_blank" rel="noreferrer" className="link" href="http://adsabs.harvard.edu/abs/2017arXiv171009399Y">here</a>.)


         (ApJ).
        </p>
    },
    {
        image: agn,
        title: "AGN in dwarf galaxies as seen by NuSTAR",
        text: <p className="worklist__subtitle">I've been using NuSTAR serendipitous survey data to search for hard X-ray photons from dwarf galaxies.
        With NuSTAR's superb sensitivity of probing high energy X-ray photons, we can see emission from accreting black holes even if
        they are heavily obscured. This will provide a more complete picture of the AGN population in dwarf galaxies,
        and better constrain the boundary condition for different primordial black seeding scenarios (Published in ApJ, see the article <a target="_blank" rel="noreferrer" className="link" href="https://arxiv.org/abs/1701.08768">here</a>.)
    </p>
    },
    {
        image: midIR,
        title: "Mid-IR and X-ray emission from powerful AGNs",
        text: <p className="worklist__subtitle">To explore the nature of supermassive black hole accretion rate indicators in quasars,
        I have compiled several quasar catalogs and confirmed that on average,
        the AGN X-ray to mid-IR luminosity ratio is indeed lower than the local relation if we take the X-ray flux limits into account.
        This is essential in the studies of AGN and galaxy coevolution since the choice of SMBH accretion rate indicators
        can actually alter the interpretation of the results (Published in ApJ, see the article <a target="_blank" rel="noreferrer" className="link" href="https://arxiv.org/abs/1701.05207">here</a>.)
    </p>
    },
    {
        image: quasars,
        title: "The connection between AGN obscuration and star formation in powerful quasars",
        text: <p className="worklist__subtitle">A simple explanation of the close correlation between black hole accretion and star formation is that they are both fueled by the same gas reservoir.
        By studying quasars (the most luminous AGN) based on the presence of hot dust heated by black holes,
        we find a direct connection between star formation and quasar obscuration.
        Since the most rapid growth of galaxy and SMBH happens at this dust-enshrouded phase,
        it is important to include these heavily obscured AGN population when search for evidence of the AGN-galaxy coevolution.
        (See the article <a target="_blank" rel="noreferrer" className="link" href="http://adsabs.harvard.edu/cgi-bin/bib_query?arXiv:1501.04959">here</a>.)
    </p>
    },
    {
        image: blackHole,
        title: "The correlation between star formation and black hole accretion in star-forming galaxies",
        text: <p className="worklist__subtitle">Ever since the discovery of the tight correlation between the galaxy bulge mass and the SMBH mass for nearly every massive galaxies,
        a large number of studies have been trying to look for the underlying physical mechanisms that drive this correlation.
        Previous studies have primarily focused on AGNs where the supermassive black holes are actively growing.
        However, considering the more rapid variability of black hole accretion rate than galactic star formation rate,
        we found that when focusing on the star-forming galaxies (not necessarily an AGN),
        their average SMBH accretion rate is strongly correlated to the star formation rate.
        The published article could be found <a target="_blank" rel="noreferrer" className="link" href="http://adsabs.harvard.edu/abs/2013ApJ...773....3C">here</a>.
        A short summary of this paper could also be found at <a target="_blank" rel="noreferrer" className="link" href="http://scitechdaily.com/a-link-between-black-hole-accretion-rate-and-star-formation-rate/">SciTech Daily</a>.
    </p>
    }

]
export default function Works() {
    return (
        <section className="works">
            <h2 className="works__title">Recent Work</h2>
            <p className="works__subtitle">
                Here's the brief summary of the past and present projects to which
                I have had primary intellectual or observational contributions.
                I am also a co-author for 14 other peer-reviewed papers to which I have had significant contributions.
		    </p>
            <ul className="works__list">
                {
                    works.map((item, i) => <WorkList id={i} image={item.image} title={item.title} text={item.text} />)
                }
            </ul>
        </section>
    )
}