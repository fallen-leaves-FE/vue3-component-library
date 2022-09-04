<template>
  <div class="btns">
    <fa-button>
      default
    </fa-button>
    <fa-button type="text">
      text
    </fa-button>
    <fa-button type="success">
      success
    </fa-button>
    <fa-button type="danger">
      danger
    </fa-button>
    <fa-button type="info">
      info
    </fa-button>
    <fa-button type="primary">
      primary
    </fa-button>
  </div>

  <div class="btns">
    <fa-button plain>
      default
    </fa-button>
    <fa-button
      type="text"
      plain
    >
      text
    </fa-button>
    <fa-button
      type="success"
      plain
    >
      success
    </fa-button>
    <fa-button
      type="danger"
      plain
    >
      danger
    </fa-button>
    <fa-button
      type="info"
      plain
    >
      info
    </fa-button>
    <fa-button
      type="primary"
      plain
    >
      primary
    </fa-button>
  </div>

  <div class="btns">
    <fa-button round>
      <template #icon>
        <fa-icon name="fa-icon-compass" />
      </template>
      default
    </fa-button>
    <fa-button
      type="text"
      round
    >
      <template #icon>
        <fa-icon name="fa-icon-compass" />
      </template>
      text
    </fa-button>
    <fa-button
      type="success"
      round
    >
      <template #icon>
        <fa-icon name="fa-icon-compass" />
      </template>
      success
    </fa-button>
    <fa-button
      type="danger"
      round
    >
      <template #icon>
        <fa-icon name="fa-icon-compass" />
      </template>
      danger
    </fa-button>
    <fa-button
      type="info"
      round
    >
      <template #icon>
        <fa-icon name="fa-icon-compass" />
      </template>
      info
    </fa-button>
    <fa-button
      type="primary"
      round
    >
      <template #icon>
        <fa-icon name="fa-icon-compass" />
      </template>
      primary
    </fa-button>
  </div>

  <div class="btns">
    <fa-button circle>
      <template #icon>
        <fa-icon name="fa-icon-compass" />
      </template>
    </fa-button>
    <fa-button
      type="text"
      circle
    >
      <template #icon>
        <fa-icon name="fa-icon-compass" />
      </template>
    </fa-button>
    <fa-button
      type="success"
      circle
    >
      <template #icon>
        <fa-icon name="fa-icon-compass" />
      </template>
    </fa-button>
    <fa-button
      type="danger"
      circle
    >
      <template #icon>
        <fa-icon name="fa-icon-compass" />
      </template>
    </fa-button>
    <fa-button
      type="info"
      circle
    >
      <template #icon>
        <fa-icon name="fa-icon-compass" />
      </template>
    </fa-button>
    <fa-button
      type="primary"
      circle
    >
      <template #icon>
        <fa-icon name="fa-icon-compass" />
      </template>
    </fa-button>
  </div>
</template>
<script lang="ts" setup>

</script>
<style>
	.btns {
		margin-bottom: 10px;
	}
</style>
