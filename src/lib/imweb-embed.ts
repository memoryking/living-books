/** Runs in the Imweb host document, never inside the cross-origin reader. */
export const imwebFooterStyle = `<style>
body:has(iframe[data-lb-hide-imweb-footer]) #doz_footer_wrap,
body:has(iframe[data-lb-hide-imweb-footer]) #doz_footer {
  display: none !important;
}
</style>`;
