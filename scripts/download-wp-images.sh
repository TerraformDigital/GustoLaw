#!/bin/bash
# ============================================================
# Gusto Law - WordPress Image Migration Script
# ============================================================
# Run this script from the root of the GustoLaw project directory
# to download all WordPress media assets to local public/images/.
#
# Usage: bash scripts/download-wp-images.sh
#
# After running, update image references in the codebase:
#   - WordPress URLs → local /images/ paths
#   - See IMAGE_MAP below for the mapping
# ============================================================

set -e

BASE_URL="https://gustolaw.ca/wp-content/uploads"
PUBLIC="public/images"

echo "📦 Downloading WordPress media to $PUBLIC..."

# Create directories
mkdir -p "$PUBLIC/services"
mkdir -p "$PUBLIC/blog"
mkdir -p "$PUBLIC/brand"
mkdir -p "$PUBLIC/backgrounds"
mkdir -p "$PUBLIC/credentials"
mkdir -p "$PUBLIC/icons"

# ============================================================
# SERVICE IMAGES (used as hero backgrounds on service pages)
# ============================================================
echo ""
echo "🏢 Downloading service images..."

curl -sL "$BASE_URL/2022/01/Business-Formation-scaled.jpg" -o "$PUBLIC/services/business-formation.jpg"
echo "  ✓ business-formation.jpg"

curl -sL "$BASE_URL/2022/01/corporate-lawyer-scaled.jpg" -o "$PUBLIC/services/corporate-lawyer.jpg"
echo "  ✓ corporate-lawyer.jpg"

curl -sL "$BASE_URL/2022/01/dispute-resolution-lawyer-scaled.jpg" -o "$PUBLIC/services/dispute-resolution.jpg"
echo "  ✓ dispute-resolution.jpg"

curl -sL "$BASE_URL/2022/01/General-Counsel-scaled.jpg" -o "$PUBLIC/services/general-counsel.jpg"
echo "  ✓ general-counsel.jpg"

curl -sL "$BASE_URL/2022/01/joint-ventures-strategic-partnerships-scaled.jpg" -o "$PUBLIC/services/joint-ventures.jpg"
echo "  ✓ joint-ventures.jpg"

curl -sL "$BASE_URL/2022/01/Oil-and-Gas-Lawyer-scaled.jpg" -o "$PUBLIC/services/oil-gas-lawyer.jpg"
echo "  ✓ oil-gas-lawyer.jpg"

curl -sL "$BASE_URL/2022/01/Cannabis-Law-scaled.jpg" -o "$PUBLIC/services/cannabis-law.jpg"
echo "  ✓ cannabis-law.jpg"

curl -sL "$BASE_URL/2022/01/cryptocurrency-and-blockchain-lawyer-scaled.jpg" -o "$PUBLIC/services/cryptocurrency-blockchain.jpg"
echo "  ✓ cryptocurrency-blockchain.jpg"

curl -sL "$BASE_URL/2022/01/ecommerce-lawyer-scaled.jpg" -o "$PUBLIC/services/ecommerce.jpg"
echo "  ✓ ecommerce.jpg"

# ============================================================
# BLOG FEATURED IMAGES
# ============================================================
echo ""
echo "📝 Downloading blog images..."

curl -sL "$BASE_URL/2024/11/SaaS-Agreements-scaled.jpeg" -o "$PUBLIC/blog/saas-agreements.jpg"
echo "  ✓ saas-agreements.jpg"

curl -sL "$BASE_URL/2024/11/SaaS-Business-Agreements.jpg" -o "$PUBLIC/blog/saas-business-agreements.jpg"
echo "  ✓ saas-business-agreements.jpg"

curl -sL "$BASE_URL/2025/01/Calgary-Software-Lawyer.jpg" -o "$PUBLIC/blog/calgary-software-lawyer.jpg"
echo "  ✓ calgary-software-lawyer.jpg"

curl -sL "$BASE_URL/2025/01/7-must-have-elements-in-SaaS-contract.jpg" -o "$PUBLIC/blog/saas-must-have-elements.jpg"
echo "  ✓ saas-must-have-elements.jpg"

curl -sL "$BASE_URL/2025/02/Funding-Stages.jpg" -o "$PUBLIC/blog/funding-stages.jpg"
echo "  ✓ funding-stages.jpg"

curl -sL "$BASE_URL/2025/02/Intellectual-Property.jpg" -o "$PUBLIC/blog/intellectual-property.jpg"
echo "  ✓ intellectual-property.jpg"

curl -sL "$BASE_URL/2025/02/Personnel-Equity.jpg" -o "$PUBLIC/blog/personnel-equity.jpg"
echo "  ✓ personnel-equity.jpg"

curl -sL "$BASE_URL/2025/02/Guide-For-Tech-Startups.jpg" -o "$PUBLIC/blog/guide-tech-startups.jpg"
echo "  ✓ guide-tech-startups.jpg"

curl -sL "$BASE_URL/2025/03/judge-gavel-on-laptop-concept-2025-01-08-02-49-58-utc-scaled.jpeg" -o "$PUBLIC/blog/software-law-gavel.jpg"
echo "  ✓ software-law-gavel.jpg"

curl -sL "$BASE_URL/2025/03/pipeline-2025-01-09-03-30-23-utc-scaled.jpeg" -o "$PUBLIC/blog/oil-pipeline.jpg"
echo "  ✓ oil-pipeline.jpg"

curl -sL "$BASE_URL/2025/04/Types-of-Software-Licensing-Models.png" -o "$PUBLIC/blog/software-licensing-models.png"
echo "  ✓ software-licensing-models.png"

curl -sL "$BASE_URL/2025/05/Negotiate-Oil-Gas-Leases.jpg" -o "$PUBLIC/blog/negotiate-oil-gas-leases.jpg"
echo "  ✓ negotiate-oil-gas-leases.jpg"

curl -sL "$BASE_URL/2025/06/Holding-Company-and-Separate-Share-Classes.jpg" -o "$PUBLIC/blog/holding-company-share-classes.jpg"
echo "  ✓ holding-company-share-classes.jpg"

curl -sL "$BASE_URL/2025/07/Copyright-Image.png" -o "$PUBLIC/blog/copyright.png"
echo "  ✓ copyright.png"

curl -sL "$BASE_URL/2025/07/Patent.png" -o "$PUBLIC/blog/patent.png"
echo "  ✓ patent.png"

curl -sL "$BASE_URL/2025/07/Trademark.png" -o "$PUBLIC/blog/trademark.png"
echo "  ✓ trademark.png"

curl -sL "$BASE_URL/2025/07/Intellectual-Property-Basics.jpg" -o "$PUBLIC/blog/ip-basics.jpg"
echo "  ✓ ip-basics.jpg"

curl -sL "$BASE_URL/2025/08/PIPEDA-logo.png" -o "$PUBLIC/blog/pipeda-logo.png"
echo "  ✓ pipeda-logo.png"

curl -sL "$BASE_URL/2025/08/Workplace-Privacy-Critical-Considerations-for-Alberta-Employers.jpg" -o "$PUBLIC/blog/workplace-privacy.jpg"
echo "  ✓ workplace-privacy.jpg"

# ============================================================
# BRAND ASSETS
# ============================================================
echo ""
echo "🎨 Downloading brand assets..."

curl -sL "$BASE_URL/2022/01/Gusto-Law-OG.jpg" -o "$PUBLIC/brand/gusto-law-og.jpg"
echo "  ✓ gusto-law-og.jpg"

curl -sL "$BASE_URL/2022/01/Gusto-Law-FB-cover.jpg" -o "$PUBLIC/brand/gusto-law-fb-cover.jpg"
echo "  ✓ gusto-law-fb-cover.jpg"

curl -sL "$BASE_URL/2022/01/Gusto-Law-twitter-cover.jpg" -o "$PUBLIC/brand/gusto-law-twitter-cover.jpg"
echo "  ✓ gusto-law-twitter-cover.jpg"

curl -sL "$BASE_URL/2022/01/Gusto-Law-square-logo.jpg" -o "$PUBLIC/brand/gusto-law-square-logo.jpg"
echo "  ✓ gusto-law-square-logo.jpg"

curl -sL "$BASE_URL/2021/12/gusto-law-logo.svg" -o "$PUBLIC/brand/gusto-law-logo.svg"
echo "  ✓ gusto-law-logo.svg"

curl -sL "$BASE_URL/2021/12/favicon.png" -o "$PUBLIC/brand/favicon.png"
echo "  ✓ favicon.png"

# ============================================================
# BACKGROUND IMAGES
# ============================================================
echo ""
echo "🖼️  Downloading background images..."

curl -sL "$BASE_URL/2021/12/home-hero-background.jpg" -o "$PUBLIC/backgrounds/home-hero.jpg"
echo "  ✓ home-hero.jpg"

curl -sL "$BASE_URL/2021/12/title-header-bg.jpg" -o "$PUBLIC/backgrounds/title-header.jpg"
echo "  ✓ title-header.jpg"

curl -sL "$BASE_URL/2021/12/pattern-background.png" -o "$PUBLIC/backgrounds/pattern.png"
echo "  ✓ pattern.png"

# ============================================================
# CREDENTIAL LOGOS
# ============================================================
echo ""
echo "🏛️  Downloading credential logos..."

curl -sL "$BASE_URL/2021/12/logo-canadian-bar-association.png" -o "$PUBLIC/credentials/canadian-bar-association.png"
echo "  ✓ canadian-bar-association.png"

curl -sL "$BASE_URL/2021/12/logo-law-society-alberta.png" -o "$PUBLIC/credentials/law-society-alberta.png"
echo "  ✓ law-society-alberta.png"

curl -sL "$BASE_URL/2021/12/logo-university-calgary.png" -o "$PUBLIC/credentials/university-calgary.png"
echo "  ✓ university-calgary.png"

# ============================================================
# SVG ICONS
# ============================================================
echo ""
echo "⭐ Downloading icons..."

curl -sL "$BASE_URL/2021/12/icon-telephone.svg" -o "$PUBLIC/icons/telephone.svg"
curl -sL "$BASE_URL/2021/12/icon-contracted-counsel.svg" -o "$PUBLIC/icons/contracted-counsel.svg"
curl -sL "$BASE_URL/2021/12/icon-business-law.svg" -o "$PUBLIC/icons/business-law.svg"
curl -sL "$BASE_URL/2021/12/icon-corporate-advisory.svg" -o "$PUBLIC/icons/corporate-advisory.svg"
curl -sL "$BASE_URL/2021/12/icon-incorporation.svg" -o "$PUBLIC/icons/incorporation.svg"
curl -sL "$BASE_URL/2021/12/icon-business-law-teal.svg" -o "$PUBLIC/icons/business-law-teal.svg"
curl -sL "$BASE_URL/2021/12/icon-contracted-counsel-teal.svg" -o "$PUBLIC/icons/contracted-counsel-teal.svg"
curl -sL "$BASE_URL/2021/12/icon-corporate-advisory-teal.svg" -o "$PUBLIC/icons/corporate-advisory-teal.svg"
curl -sL "$BASE_URL/2021/12/icon-incorporation-teal.svg" -o "$PUBLIC/icons/incorporation-teal.svg"
curl -sL "$BASE_URL/2021/12/icon-star-1.svg" -o "$PUBLIC/icons/star.svg"
curl -sL "$BASE_URL/2021/12/icon-location.svg" -o "$PUBLIC/icons/location.svg"
curl -sL "$BASE_URL/2021/12/icon-contact-us.svg" -o "$PUBLIC/icons/contact-us.svg"
echo "  ✓ All 12 icons downloaded"

# ============================================================
# TEAM PHOTOS (may already exist)
# ============================================================
echo ""
echo "👥 Downloading team photos..."

curl -sL "$BASE_URL/2021/12/lawyer-gus-lu.png" -o "$PUBLIC/team/gus-lu.png"
echo "  ✓ gus-lu.png"

curl -sL "$BASE_URL/2021/12/lawyer-gus-lu.jpg" -o "$PUBLIC/team/gus-lu.jpg"
echo "  ✓ gus-lu.jpg"

curl -sL "$BASE_URL/2025/05/Tyler-Anthony-1.jpg" -o "$PUBLIC/team/tyler-anthony-1.jpg"
echo "  ✓ tyler-anthony-1.jpg"

curl -sL "$BASE_URL/2025/05/Tyler-Anthony-2.jpg" -o "$PUBLIC/team/tyler-anthony-2.jpg"
echo "  ✓ tyler-anthony-2.jpg"

echo ""
echo "============================================================"
echo "✅ All WordPress media downloaded successfully!"
echo ""
echo "Total files downloaded:"
echo "  - 9 service images"
echo "  - 19 blog images"
echo "  - 6 brand assets"
echo "  - 3 background images"
echo "  - 3 credential logos"
echo "  - 12 icons"
echo "  - 4 team photos"
echo "  = 56 files total"
echo ""
echo "Next steps:"
echo "  1. Update image references in code from WordPress URLs to local paths"
echo "  2. Run: git add public/images/ && git commit -m 'Add localized WordPress media'"
echo "  3. Push to deploy"
echo "============================================================"
