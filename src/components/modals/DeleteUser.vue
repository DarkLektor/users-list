<script setup>
const emit = defineEmits(['cancel', 'confirm'])

</script>

<template>
  <Teleport to="body">
    <div class="delete-user-modal__wrapper" @click="emit('cancel')">
      <div class="delete-user-modal" @click.stop>
        <p class="delete-user-modal__title">Вы уверены, что хотите удалить пользователя?</p>
        <div class="delete-user-modal__buttons">
          <button class="confirm-btn delete-user-modal__btn" @click="emit('confirm')">
            Да
          </button>
          <button class="cancel-btn delete-user-modal__btn" @click="emit('cancel')">
            Нет
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.delete-user-modal {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 36px;

  &__wrapper {
    position: fixed;
    inset: 0;
    background: rgba(#000, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 24px;
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 36px;
  }

  &__btn {
    padding: 6px 36px;
    background: $light-grey;
    border-radius: 3px;
  }

  .cancel-btn {
    background: $primary;
  }
}
</style>
