<?php
/**
 * The template for displaying all pages.
 *
 * @package QOD_Starter_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

    <section class="quote-submission-wrapper">
      <header>
        <?php the_title( '<h1 class="entry-title">', '</h1>'); ?>
      </header>

      <form name="quoteForm" id="quote-submission-form">
      <!-- $('#quote-submission-form').submit(); -->
        <div>
          <label for="quote-author">Author of Quote</label>
          <input type="text" name="quote_author" id="quote-author">
        </div>
        <div>        
          <label for="quote-content">Quote</label>
          <textarea name="quote_content" id="quote-content" cols="20" rows="3"></textarea>
        </div>
        <div>
          <label for="quote-source">Where did you find this quote?(e.g. book name)</lable>
          <input type="text" name="quote_source" id="quote-source">
        </div>
        <div>
          <label for="quote-source-url">Provid the URL of the quote source, if avalable.</label>
          <input type="url" name="quote_source_url" id="quote-source-url">
        </div>
      </form>
    </section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
