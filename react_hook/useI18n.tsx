
import React from 'react';
import { useRouter } from 'next/router';

import content from "@i18n";

export default function UseI18n(){
    const router = useRouter();
    const { locale } = router;
    return content[locale];
}