import { Box, Card, CardMedia, Container, Grid, } from "@mui/material";
import Link from "next/link";
import styles from "../../../styles/sass/components/Home.module.scss";


const Portfolio = (props) => {
   return (
    <section className={styles.Experties + " " + styles.Portfolio + " section-padding lightgray-dark bg-cover bg-center bg-norepeat"}>
      <Container>
        <div className="align-center hgroup">
          <h2 className="mb-10">
          Our Portfolio
          </h2>
          <p>Mobile Apps, Websites, and QA Solutions</p>
        </div>
        <Grid container spacing={3} mt={3}>
            <Grid  className="" item md={4} xs={12}>
              <Card
                className={
                  styles.box + " " + styles.Portfoliobox +
                  "  br-12 white-bg"
                }
              >
                <div className="card-thumb">
                <img src="/images/portfolio3.png" />
                  
                </div>
                <Box sx={{mt: 3}}>
                     <h4 className="basecolor2">Metastore Dashboard Design for store Manager and Brand Manager </h4>
                     <p>we delivered project for store manager and brand manager for our client this is the  dashboard of online platform for owners brand and stores</p>
                     <Box>
                        <div className="bold">Technology/tools</div>
                        <p>Figma, photoshop, html, css, javascript, jquery, djnago pythoon</p>
                     </Box>
                     <Box className="d-flex justify-content-end" sx={{mt:3}}>
                        <Link
                           className={ "  align-center text-decoration-none d-flex"}
                           href={"/"}
                        >
                           <span>See project</span> <i class="icofont icofont-long-arrow-right f30"></i>
                        </Link>

                     </Box>
                </Box>
              </Card>
            </Grid>
            {/*  */}
            {/*  */}
            <Grid  className="" item md={4} xs={12}>
              <Card
                className={
                  styles.box + " " + styles.Portfoliobox +
                  "  br-12 white-bg"
                }
              >
                <div className="card-thumb">
                <img src="/images/portfolio1.png" />
                  
                </div>
                <Box sx={{mt: 3}}>
                     <h4 className="basecolor2">Metastore Dashboard Design for store Manager and Brand Manager </h4>
                     <p>we complete this project in preset thi is corporate employee insurance platform we have done design and development  successfully</p>
                     <Box>
                        <div className="bold">Technology/tools</div>
                        <p>Figma, photoshop, html, css, javascript, jquery, wordpress, elementor, custom plugin</p>
                     </Box>
                     <Box className="d-flex justify-content-end" sx={{mt:3}}>
                        <Link
                           className={ "  align-center text-decoration-none d-flex"}
                           href={"/"}
                        >
                           <span>See project</span> <i class="icofont icofont-long-arrow-right f30"></i>
                        </Link>

                     </Box>
                </Box>
              </Card>
            </Grid>
            {/*  */}
            <Grid  className="" item md={4} xs={12}>
              <Card
                className={
                  styles.box + " " + styles.Portfoliobox +
                  "  br-12 white-bg"
                }
              >
                <div className="card-thumb">
                <img src="/images/portfolio2.png" />
                  
                </div>
                <Box sx={{mt: 3}}>
                     <h4 className="basecolor2">Dow University of Health Sciences University and Hospital Project </h4>
                     <p>we have done for dow university and hospital project we have done design and development successfully and still working on hospital part this is our big achievement</p>
                     <Box>
                        <div className="bold">Technology/tools</div>
                        <p>Figma, photoshop, html, css, javascript, jquery, Wpbakery page builder, </p>
                     </Box>
                     <Box className="d-flex justify-content-end" sx={{mt:3}}>
                        <Link
                           className={ "  align-center text-decoration-none d-flex"}
                           href={"/"}
                        >
                           <span>See project</span> <i class="icofont icofont-long-arrow-right f30"></i>
                        </Link>

                     </Box>
                </Box>
              </Card>
            </Grid>
         </Grid>
      </Container>
    </section>
   );
}

export default Portfolio;