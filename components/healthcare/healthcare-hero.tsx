import React from 'react';
import { HeroSection } from '../../blocks/main/hero/hero';

interface HealthcareHeroProps {
    title: string;
    subtitle: string;
}

export const HealthcareHero: React.FC<HealthcareHeroProps> = ({ title, subtitle }) => {
    return (
        <div style={{
            background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background pattern */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                opacity: 0.3
            }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
                <HeroSection title={title}>
                    {subtitle}
                </HeroSection>
                
                {/* Healthcare icons */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    marginTop: '2rem',
                    paddingBottom: '2rem',
                    flexWrap: 'wrap'
                }}>
                    <div style={{ textAlign: 'center', opacity: 0.8 }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🏥</div>
                        <div style={{ fontSize: '0.9rem' }}>Hospitals</div>
                    </div>
                    <div style={{ textAlign: 'center', opacity: 0.8 }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💊</div>
                        <div style={{ fontSize: '0.9rem' }}>Pharma</div>
                    </div>
                    <div style={{ textAlign: 'center', opacity: 0.8 }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🩺</div>
                        <div style={{ fontSize: '0.9rem' }}>Devices</div>
                    </div>
                    <div style={{ textAlign: 'center', opacity: 0.8 }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📱</div>
                        <div style={{ fontSize: '0.9rem' }}>Telemedicine</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
