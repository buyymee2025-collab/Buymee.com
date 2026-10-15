# BUYYMEE owner dashboard

The dashboard lives at `/admin`. It needs a Supabase project before login, uploads or saves work. Until configured, the storefront uses its existing catalogue and the dashboard displays a setup message. Nothing is saved only to the browser.

## Connect it

1. Create a Supabase project and run `supabase/migrations/202610150001_admin_catalog.sql` in its SQL editor, once.
2. In Supabase Authentication, disable public sign-ups. Create the shared owner account with email `admin@buyymee.com` (or the email set as `VITE_ADMIN_EMAIL`) and a strong password. Deliver its password privately. The admin screen only asks for that password. Anyone you share it with receives the same owner access.
3. Approve each owner in the SQL editor using their actual authentication user ID:

```sql
insert into public.admin_members (user_id) values ('OWNER_AUTH_USER_UUID');
```

4. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel using the project's URL and public publishable/anon key. Never use a secret/service-role key. Redeploy after setting variables. For local development, copy `.env.example` to `.env`.
5. Visit `/admin`, enter the owner password, add a product with a photo and price, then open `/shop` to verify it. Check that a signed-out browser cannot write products or upload media. An unapproved signed-in account must also be denied.

Existing Cloudinary media stays in place. New uploads use the Supabase public `product-media` bucket, protected by owner-only upload policies. Public shoppers can read published product data. Removed product payloads and owner membership data are not available to anonymous shoppers.

## Daily use

Search or filter products, select Edit, update details, upload media or paste existing HTTPS media links, and Apply. Prices use USD, the storefront's base currency. The first image is the cover. Use arrows to reorder media. For products with colour variants, the editor retains all existing variant media and saving combines it into one gallery. Removing a gallery entry does not delete its stored file.

Remove hides a listing using a tombstone so it cannot reappear from the bundled catalogue. Database records and media are retained. A database administrator can restore it by setting `deleted = false`. Stock controls disable adding sold-out items to the cart. Existing carts are not a stock reservation system.

Other browsers retrieve catalogue updates on load, window focus, or the next 60-second refresh. The editing browser refreshes after saving. If the database cannot be reached, customers retain the catalogue already loaded; an initial failed request leaves the bundled catalogue available. The database connection and policy checks must be tested on the real project before owner handover.

## Access and maintenance

Sessions are scoped to the browser tab and refresh when needed. Sign out on shared devices. Revoke an owner's rights by deleting their `admin_members` row. Product writes and uploads require membership at the database level, independent of the page's login screen. Back up the database and media through the provider. This implementation does not include owner self-registration, password-reset emails, inventory quantities or payment processing.
