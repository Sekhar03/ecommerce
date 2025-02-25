
import { HeadLine } from '@/components/global/HeadLine';
import { WidgetWrapper } from '@/components/global/WidgetWrapper';
import dynamic from 'next/dynamic';

const RollingGallery = dynamic(
  () => import('@/components/style/RollingGallery'),
  { ssr: false }
);

export const Sponsors = () => {
    return (
    <WidgetWrapper>
        <HeadLine title='Sponsors' subtitle='Partners that helped us organize' titleClass='text-red-500 text-3xl md:text-5xl'/>
            <RollingGallery autoplay pauseOnHover/>
    </WidgetWrapper>
    )
}
