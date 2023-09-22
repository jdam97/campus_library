import rateLimit from "express-rate-limit"

export let limitRequest = ()=>{
    return rateLimit({
        windowMs: 30 * 1000, // 30 seconds
        max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
        standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    })
};

export let limitRequestLogin = ()=>{
    return rateLimit({
        windowMs: 5 * 60 * 1000, // 5 minutes
        max: 10, // Limit each IP to 100 requests per `window` (here, per 5 minutes)
        standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    })
};

