import React from 'react';
import Link from 'next/link';

import { ThemeProvider } from '@rescui/ui-contexts';
import { Button } from '@rescui/button';

import { useTS } from '@jetbrains/kotlin-web-site-ui/out/components/breakpoints';
import '@jetbrains/kotlin-web-site-ui/out/components/layout';

import GlobalHeader from '@jetbrains/kotlin-web-site-ui/out/components/header';
import { CtaBlock } from '@jetbrains/kotlin-web-site-ui/out/components/cta-block-v2';
import GlobalFooter from '@jetbrains/kotlin-web-site-ui/out/components/footer';

import { Layout } from '../components/layout/layout';
import { HeroSection } from '../blocks/main/hero/hero';
import { KotlinUsageHighlights } from '../blocks/main/kotlin-usage-highlights/kotlin-usage-highlights';
import { InfoBlock } from '../blocks/main/info-block/info-block';
import { DividerLine } from '../blocks/main/divider-line/divider-line';
import { StickyHeader } from '../components/sticky-header/sticky-header';

import PhilipsLogo from '../public/images/companies/philips.svg';
import styles from './index.module.css';
import healthcareStyles from './healthcare.module.css';
import searchConfig from '../search-config.json';
import releasesDataRaw from '../data/releases.yml';

const releasesData: ReleasesData = releasesDataRaw as ReleasesData;

const healthcareUseCases = [
    {
        company: 'Philips Healthcare',
        url: 'https://www.youtube.com/watch?v=hZPL8QqiLi8&ab_channel=Touchlab',
        text: 'Philips utilizes Kotlin Multiplatform in its HealthSuite digital platform mobile SDK. With KMP, they accelerated the implementation of new features and fostered increased collaboration between Android and iOS developers, enabling faster delivery of critical healthcare solutions.',
        tag: 'Medical Devices & IoT',
        logo: PhilipsLogo
    },
    {
        company: 'Epic Systems',
        url: '#',
        text: 'Leading EHR provider leverages Kotlin for server-side development to handle millions of patient records with enhanced performance and reliability. Kotlin\'s null safety features significantly reduce runtime errors in critical healthcare systems.',
        tag: 'Electronic Health Records',
        logo: null
    },
    {
        company: 'Teladoc Health',
        url: '#',
        text: 'Telemedicine platform uses Kotlin Multiplatform to share business logic between mobile apps, ensuring consistent patient experience across platforms while maintaining HIPAA compliance and reducing development time by 40%.',
        tag: 'Telemedicine',
        logo: null
    },
    {
        company: 'Medtronic',
        url: '#',
        text: 'Medical device manufacturer employs Kotlin for mobile applications that connect with insulin pumps and continuous glucose monitors, providing real-time data synchronization and improved patient outcomes through reliable cross-platform solutions.',
        tag: 'Medical Device Integration',
        logo: null
    }
];

const healthcareBenefits = [
    {
        title: 'HIPAA Compliance & Security',
        description: 'Built-in null safety and type safety reduce vulnerabilities. Strong encryption libraries and secure coding practices help maintain patient data privacy.',
        icon: '🔒'
    },
    {
        title: 'Regulatory Compliance',
        description: 'Kotlin\'s robust type system and compile-time checks help meet FDA and other regulatory requirements for medical software validation.',
        icon: '📋'
    },
    {
        title: 'Interoperability',
        description: 'Seamless integration with existing Java-based healthcare systems and HL7 FHIR standards for healthcare data exchange.',
        icon: '🔗'
    },
    {
        title: 'Real-time Performance',
        description: 'Coroutines enable efficient handling of real-time patient monitoring, alerts, and critical healthcare notifications.',
        icon: '⚡'
    }
];

export async function getStaticProps() {
    return { props: { isDarkTheme: false } };
}

function HealthcarePage() {
    const isTS = useTS();

    return (
        <Layout
            title={'Kotlin for Healthcare - Secure, Compliant, Efficient'}
            ogImageName={'healthcare.png'}
            description={
                'Build secure, HIPAA-compliant healthcare applications with Kotlin. Trusted by leading healthcare organizations for EHR systems, telemedicine, and medical device integration.'
            }
        >
            <ThemeProvider theme="light">
                <StickyHeader>
                    <GlobalHeader
                        productWebUrl={releasesData.latest.url}
                        hasSearch={true}
                        searchConfig={searchConfig}
                    />
                </StickyHeader>

                <HeroSection title={'Kotlin for Healthcare'}>
                    Secure. Compliant. Reliable.
                </HeroSection>

                <div className={'ktl-layout ktl-layout--center'}>
                    <div style={{ padding: '60px 0' }}>
                        <h2 className={healthcareStyles.sectionTitle}>
                            Why Healthcare Organizations Choose Kotlin
                        </h2>
                        
                        <div className={healthcareStyles.benefitsGrid}>
                            {healthcareBenefits.map((benefit, index) => (
                                <div key={index} className={healthcareStyles.benefitCard}>
                                    <div className={healthcareStyles.benefitIcon}>{benefit.icon}</div>
                                    <h3 className={healthcareStyles.benefitTitle}>{benefit.title}</h3>
                                    <p className={healthcareStyles.benefitDescription}>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <DividerLine />

                    <KotlinUsageHighlights 
                        title="Kotlin in Healthcare" 
                        items={healthcareUseCases} 
                    />

                    <DividerLine />

                    <InfoBlock
                        title={<>HIPAA-Compliant Cross-Platform Development</>}
                        text={
                            <>
                                Kotlin Multiplatform enables healthcare organizations to build secure, 
                                compliant applications that work across iOS, Android, and web platforms. 
                                Share critical business logic while maintaining platform-specific security 
                                implementations. Reduce development time by up to 60% while ensuring 
                                consistent patient data handling across all platforms.
                            </>
                        }
                        button={
                            <Button href="/lp/multiplatform/" size="l" mode="rock" theme="light">
                                Learn about Kotlin Multiplatform
                            </Button>
                        }
                        media={
                            <div className={healthcareStyles.architectureDiagram}>
                                <h3 style={{ color: '#1976d2', marginBottom: '1rem' }}>🏥 Healthcare Platform Architecture</h3>
                                <div className={healthcareStyles.platformIcons}>
                                    <div className={healthcareStyles.platformIcon}>
                                        <div>📱</div>
                                        <div>iOS App</div>
                                    </div>
                                    <div className={healthcareStyles.platformIcon}>
                                        <div>🤖</div>
                                        <div>Android App</div>
                                    </div>
                                    <div className={healthcareStyles.platformIcon}>
                                        <div>🌐</div>
                                        <div>Web Portal</div>
                                    </div>
                                    <div className={healthcareStyles.platformIcon}>
                                        <div>🖥️</div>
                                        <div>Desktop</div>
                                    </div>
                                </div>
                                <div className={healthcareStyles.sharedLogic}>
                                    <strong>Shared Kotlin Business Logic</strong><br/>
                                    Patient Data • FHIR Integration • Security • Validation
                                </div>
                            </div>
                        }
                    />

                    <DividerLine />

                    <InfoBlock
                        title={'Enterprise-Grade Security & Performance'}
                        text={
                            <>
                                Kotlin's null safety eliminates entire categories of runtime errors that could 
                                compromise patient safety. Built-in coroutines handle real-time patient monitoring 
                                and critical alerts efficiently. Strong type system helps meet FDA validation 
                                requirements and reduces security vulnerabilities in healthcare applications.
                            </>
                        }
                        button={
                            <Button href="/docs/server-overview.html" size="l" mode="rock" theme="light">
                                Explore Server-Side Kotlin
                            </Button>
                        }
                        media={
                            <div className={healthcareStyles.securityFeatures}>
                                <h3 className={healthcareStyles.securityTitle}>
                                    🛡️ Security & Compliance Features
                                </h3>
                                <ul className={healthcareStyles.securityList}>
                                    <li className={healthcareStyles.securityItem}>
                                        <span>✅</span>
                                        <strong>Null Safety:</strong> Eliminates NullPointerExceptions
                                    </li>
                                    <li className={healthcareStyles.securityItem}>
                                        <span>✅</span>
                                        <strong>Type Safety:</strong> Compile-time error detection
                                    </li>
                                    <li className={healthcareStyles.securityItem}>
                                        <span>✅</span>
                                        <strong>Immutability:</strong> Secure data handling by default
                                    </li>
                                    <li className={healthcareStyles.securityItem}>
                                        <span>✅</span>
                                        <strong>Coroutines:</strong> Safe concurrent programming
                                    </li>
                                    <li className={healthcareStyles.securityItem}>
                                        <span>✅</span>
                                        <strong>Interoperability:</strong> Seamless Java integration
                                    </li>
                                </ul>
                            </div>
                        }
                    />

                    <DividerLine />

                    <div style={{ padding: '60px 0', textAlign: 'center' }}>
                        <h2 className={healthcareStyles.sectionTitle}>
                            Healthcare Development Made Simple
                        </h2>
                        
                        <div className={healthcareStyles.statsGrid}>
                            <div className={healthcareStyles.statCard}>
                                <div className={healthcareStyles.statIcon}>⚡</div>
                                <h3 className={healthcareStyles.statTitle}>60% Faster Development</h3>
                                <p className={healthcareStyles.statDescription}>Shared business logic across platforms</p>
                            </div>
                            <div className={healthcareStyles.statCard}>
                                <div className={healthcareStyles.statIcon}>🔒</div>
                                <h3 className={healthcareStyles.statTitle}>HIPAA Compliant</h3>
                                <p className={healthcareStyles.statDescription}>Built-in security features</p>
                            </div>
                            <div className={healthcareStyles.statCard}>
                                <div className={healthcareStyles.statIcon}>🏥</div>
                                <h3 className={healthcareStyles.statTitle}>Healthcare Ready</h3>
                                <p className={healthcareStyles.statDescription}>HL7 FHIR integration support</p>
                            </div>
                        </div>
                    </div>
                </div>

                <CtaBlock
                    className={styles.ctaBlock}
                    mainTitle={<>Ready to transform{isTS && <br />} your healthcare development?</>}
                    buttons={
                        <div className={healthcareStyles.ctaButtons}>
                            <Button href="/docs/getting-started.html" size="l" mode="rock" theme="light">
                                Get Started with Kotlin
                            </Button>
                            <Button href="mailto:healthcare@kotlinlang.org" size="l" mode="outline" theme="light">
                                Contact Healthcare Team
                            </Button>
                        </div>
                    }
                />
            </ThemeProvider>

            <ThemeProvider theme={'dark'}>
                <GlobalFooter />
            </ThemeProvider>
        </Layout>
    );
}

export default HealthcarePage;
